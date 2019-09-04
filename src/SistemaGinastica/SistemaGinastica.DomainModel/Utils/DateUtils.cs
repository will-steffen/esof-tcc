using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DomainModel.Utils
{
    public static class DateUtils
    {
        private static int DaysToAddOnNow = 0;

        public static DateTime Now()
        {            
            return DateTime.Now.AddDays(DaysToAddOnNow);
        }

        public static DateTimeOffset Offset()
        {
            throw new NotImplementedException();
        }

        public static DateTimeOffset OffsetNow()
        {            
            return DateTimeOffset.Now.AddDays(DaysToAddOnNow);
        }

        public static void AddSystemDays(int daysToAdd)
        {
            DaysToAddOnNow += daysToAdd;
        }
    }
}
