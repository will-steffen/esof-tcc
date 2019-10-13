using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class CustomerService : BaseCrudDtoService<Customer, CustomerDataAccess, CustomerDto>
    {
        private PaymentService paymentService;

        public CustomerService(CustomerDataAccess da, PaymentService paymentService) : base(da)
        {
            this.paymentService = paymentService;
        }

        public override Customer Include(CustomerDto dto)
        {
            Customer customer = MapAndSave(new Customer(), dto);
            paymentService.GenerateFirstPayment(customer);
            customer.Registration = customer.Id.ToString().PadLeft(5, '0');
            Save(customer);
            return customer;
        }

        protected override Customer Map(Customer model, CustomerDto dto)
        {
            model.Name = dto.name;
            model.Cpf = dto.cpf;
            model.Rg = dto.rg;
            model.Address = dto.address;
            model.BirthDate = dto.birthDate;
            model.PlanType = dto.planType;            
            model.PlanValue = dto.planValue;
            return base.Map(model, dto);
        }

        public Customer RegisterPayment(PaymentDto payment)
        {           
            paymentService.RegisterPayment(FindById(payment.idCustomer), payment);
            return FindById(payment.idCustomer);
        }

        public Customer RegisterVacation(VacationDto vacation)
        {
            Tuple<Payment, int> registered = paymentService.RegisterVacation(vacation);
            Payment payment = registered.Item1;
            int newVacationDays = registered.Item2;
            Customer customer = FindById(payment.IdCustomer);
            customer.PaymentList.OrderBy(x => x.PeriodStartDate);
            bool adjustDates = false;
            customer.PaymentList.ForEach(pay =>
            {
                if (adjustDates)
                {
                    pay.PeriodStartDate = pay.PeriodStartDate.AddDays(newVacationDays);
                    pay.ExpectedDate = pay.ExpectedDate.AddDays(newVacationDays);
                }

                if (pay.Id == payment.Id)
                {
                    adjustDates = true;
                }

                if (adjustDates)
                {
                    pay.PeriodEndDate = pay.PeriodEndDate.AddDays(newVacationDays);                    
                }
            });

            Save(customer);
            return customer;
        }

        public int CountCustumers()
        {
            return DataAccess.Count();
        }
    }
}
