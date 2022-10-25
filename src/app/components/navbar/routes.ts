export const URLS_EXCLUDE = [
    '/',
    '/login',
    '/cuenta/recuperar',
    '/perfil',
    '/gestion',
    '/administracion',
];

export const MENU_URLS = {
    HOME: '',
    PERFIL: {
        URL_BASE: 'usuario',
    },
    HORARIO: {
        URL_BASE: 'horario',
        ROOT: {
            URL: 'listar-horario',
            PERMISO: 'LISTAR_HORARIO'
        },
        LISTAR: {
            URL: 'listar-horario',
            PERMISO: 'LISTAR_HORARIO'
        },
        NUEVO: {
            URL: 'nuevo-horario',
            PERMISO: 'REGISTRAR_HORARIO'
        },
        EDITAR: {
            URL: 'editar-horario',
            PERMISO: 'MODIFICAR_HORARIO'
        },
        ELIMINAR: {
            URL: 'eliminar-horario',
            PERMISO: 'ELIMINAR_HORARIO'
        },
    },
};
