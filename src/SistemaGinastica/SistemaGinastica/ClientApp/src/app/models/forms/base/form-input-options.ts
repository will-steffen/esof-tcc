
export class FormInputOptions {    
    constructor(
        public value: any = '',
        public label: string = ''
    ){}

    static empty() {
        return new this('', '');
    }

    static fromEnum(enumType: {}, i18nOptions: {}) {
        let typeOptionsList = [];
        for (let key in enumType) {
            if (isNaN(Number(key))) {
                let t: any = enumType[key];
                typeOptionsList.push(
                    new FormInputOptions(t, i18nOptions[enumType[key]])
                );
            }
        }
        return typeOptionsList;
    }
}
