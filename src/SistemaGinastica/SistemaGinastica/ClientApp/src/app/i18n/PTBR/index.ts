import { I18nTags } from "src/app/enums/i18n-tags";
import { Language } from "src/app/enums/language";
import { LocaleType } from "../locale-type";
import { EnumLocale } from "./enum";

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
        deleteSuccess: 'Registro excluído com sucesso',
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
        logout: 'Sair',
        add: 'Incluir',
        showFilter: 'Expandir Filtros',
        hideFilter: 'Recolher Filtros',
        confirmDelete: 'Tem certeza que deseja excluir este registro?',
        confirmLogout: 'Tem certeza que deseja sair do sistema?',
    },

    customer: {
        title: 'Clientes',
        titleDetail: 'Cliente',
        address: 'Endereço',
        birthDate: 'Data de Nascimento',
        annualPlan: 'Plano Anual',
        registration: 'Matrícula',
    },

    groupClass: {
        title: 'Aulas em Grupo',
        titleDetail: 'Aula em Grupo',
        initHour: 'Hora de Início',
        endHour: 'Hora de Término',
        room: 'Sala',
        name: 'Nome',
        instructor: 'Professor',
    },

    home: {
        title: 'Início',
    },

    instructor: {
        title: 'Professores',
        titleDetail: 'Professor',
        authorizedMuscle: 'Professor de Musculação',
        authorizedGroupClass: 'Professor de Aula em Grupo',
    },

    login: {
        username: 'Usuário',
        password: 'Senha',
        signin: 'Entrar',
        error: 'Usuário ou senha incorretos',
    },

    user: {
        title: 'Usuários',
        titleDetail: 'Usuário',
        type: 'Tipo',
        username: 'Usuário',
        password: 'Senha',
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