import { UserType } from "src/app/enums/user-type";


let userType = {};
userType[UserType.ADMIN] = 'Administrador';
userType[UserType.MANAGER] = 'Gerente';
userType[UserType.PHYSIOTHERAPIST] = 'Fisioterapeuta';
userType[UserType.RECEPCIONIST] = 'Recepcionista';


export const EnumLocale = {
    UserType: userType
}
