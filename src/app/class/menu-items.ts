import { MENU_URLS } from "../components/navbar/routes";



export class menu{


    static menuList:Array<any>=[
        {nombre:'ESTADISTICAS', menus:[],icono:'leaderboard'},
        {nombre:'CLIENTES',menus:[],icono:'groups',url:MENU_URLS.CLIENTE.URL_BASE},
        {nombre:'PROVEEDORES',menus:[],icono:'local_shipping',url:MENU_URLS.PROVEEDOR.URL_BASE},
        {nombre:'FUNCIONARIOS',menus:[],icono:'contacts'},
        {nombre:'COMPRAS',menus:[],icono:'shopping_cart'},
        {nombre:'VENTAS',menus:[],icono:'point_of_sale'},
        {nombre:'PRODUCTOS',menus:[],icono:'inventory', url:MENU_URLS.PRODUCTO.URL_BASE}
    ]


}