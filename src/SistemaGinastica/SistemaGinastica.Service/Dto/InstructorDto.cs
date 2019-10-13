using SistemaGinastica.DomainModel.Entities;

namespace SistemaGinastica.Service.Dto
{
    public class InstructorDto : PersonDataModelDto
    {
        public bool authorizedMuscle { get; set; }
        public bool authorizedGroupClass { get; set; }
        public bool active { get; set; }

        public InstructorDto() { }

        public InstructorDto(Instructor model) : base(model)
        {
            authorizedMuscle = model.AuthorizedMuscle;
            authorizedGroupClass = model.AuthorizedGroupClass;
            active = model.Active;
        }
    }
}
