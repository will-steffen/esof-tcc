import { Language } from "src/app/enums/language";
import { LocaleType } from "../locale-type";
import { EnumLocale } from "./enum";
import { I18nTags } from "src/app/enums/i18n-tags";

export let Locale: LocaleType = {
    code: Language.PTBR,
    dateFormat: 'dd/mm/yyyy',
    label: {
        cleanFilter: 'Limpar',
        searchFilter: 'Consultar',
        actions: 'Ações',
        noResults: 'Sem Resultados',
        filterResult: `Exibindo resultados de ${I18nTags.StarCount} a ${I18nTags.EndCount}, de um total de ${I18nTags.Total}.`,
        saveSuccess: 'Registro salvo com sucesso',
        saveError: 'Erro para salvar o registro',
        yes: 'Sim',
        no: 'Não',
        select: 'Selecione',
        show: 'Mostrar',
        perPage: 'por Página',
        requiredField: 'Campo obrigatório não preenchido',
        cancel: 'Cancelar',
        save: 'Salvar',
        delete: 'Excluir',
    },

    customer: {
        title: 'Clientes',
    },

    groupClass: {
        title: 'Aulas em Grupo',
    },

    home: {
        title: 'Início',
    },

    instructor: {
        title: 'Professores',
    },

    login: {
        username: 'Usuário',
        password: 'Senha',
        signin: 'Entrar',
        error: 'Usuário ou senha incorretos',
    },
 
    user: {
        title: 'Usuários',
        type: 'Tipo',
        username: 'Usuário', 
        message: {
            usernameNotUnique: 'Usuário informado já existe',
            notFound: 'Usuário não encontrado',
        },
    },

    personData: {
        name: 'Nome',
        rg: 'RG',
        cpf: 'CPF'
    },

    enum: EnumLocale 
}