
using System;

namespace SistemaGinastica.Dto
{
    public class SystemConfigResponseDto
    {
        public int daysToAddOnNow { get; set; }
        public bool mocked { get; set; } = false;
    }
}
