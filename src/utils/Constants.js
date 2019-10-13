let { hostname } = window.location;
let production = hostname !== "localhost";
export default {
  //URL_BASE: "http://copol-dev.co/service",
  URL_BASE: production
    ? "http://ec2-18-206-226-161.compute-1.amazonaws.com:3000"
    : "http://localhost:3000",

  URL_LOGIN: "/admin/login",
  URL_VALIDAR_CUENTA: "/admin/validar_codigo",
  URL_SOLICITAR_CONTRASENA: "/admin/reset_password",
  URL_CAMBIAR_CONTRASENA: "/admin/change_password"
};
