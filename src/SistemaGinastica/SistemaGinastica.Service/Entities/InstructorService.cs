using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class InstructorService : BaseCrudDtoService<Instructor, InstructorDataAccess, InstructorDto>
    {
        private GroupClassService groupClassService;

        public InstructorService(InstructorDataAccess da, GroupClassService groupClassService) : base(da)
        {
            this.groupClassService = groupClassService;
        }

        public IEnumerable<Instructor> ListGroupClass()
        {
            return DataAccess.ListGroupClass();
        }     

        protected override Instructor Map(Instructor model, InstructorDto dto)
        {
            model.Name = dto.name;
            model.Cpf = dto.cpf;
            model.Rg = dto.rg;
            model.AuthorizedMuscle = dto.authorizedMuscle;
            model.AuthorizedGroupClass = dto.authorizedGroupClass;
            return base.Map(model, dto);
        }

        public override void Delete(long id)
        {
            groupClassService.OnDeleteInstructor(id);
            base.Delete(id);
        }
    }
}
