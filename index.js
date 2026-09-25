/* =========================================
   CIBERHUB - JAVASCRIPT DEL HOME
========================================= */


/* =========================================
   ELEMENTOS
========================================= */

const exploreButton =
  document.getElementById('explore-btn');

const providerButton =
  document.getElementById('provider-btn');

const footerProvider =
  document.getElementById('footer-provider');

const loginButton =
  document.querySelector('.login-btn');

const registerButton =
  document.querySelector('.register-btn');

const footerRegister =
  document.getElementById('footer-register');

const demoOverlay =
  document.getElementById('demo-overlay');

const demoClose =
  document.getElementById('demo-close');

const demoOk =
  document.getElementById('demo-ok');

const demoMessage =
  document.getElementById('demo-message');


/* =========================================
   IR AL CATÁLOGO
========================================= */

if(exploreButton){

  exploreButton.addEventListener(
    'click',
    () => {

      const services =
        document.getElementById('servicios');

      if(services){

        services.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });

      }

    }
  );

}


/* =========================================
   MODAL
========================================= */

function openDemo(message){

  if(!demoOverlay){
    return;
  }

  demoMessage.textContent = message;

  demoOverlay.classList.add('open');

  demoOverlay.setAttribute(
    'aria-hidden',
    'false'
  );

}


function closeDemo(){

  if(!demoOverlay){
    return;
  }

  demoOverlay.classList.remove('open');

  demoOverlay.setAttribute(
    'aria-hidden',
    'true'
  );

}


/* =========================================
   SOY PROVEEDOR
========================================= */

if(providerButton){

  providerButton.addEventListener(
    'click',
    () => {

      openDemo(
        'El registro de proveedores será parte de la siguiente etapa de CiberHub.'
      );

    }
  );

}


if(footerProvider){

  footerProvider.addEventListener(
    'click',
    event => {

      event.preventDefault();

      openDemo(
        'El registro de proveedores será parte de la siguiente etapa de CiberHub.'
      );

    }
  );

}


/* =========================================
   LOGIN
========================================= */

if(loginButton){

  loginButton.addEventListener(
    'click',
    () => {

      openDemo(
        'La pantalla de inicio de sesión se conectará posteriormente al sistema de usuarios de CiberHub.'
      );

    }
  );

}


/* =========================================
   REGISTRO
========================================= */

if(registerButton){

  registerButton.addEventListener(
    'click',
    () => {

      openDemo(
        'El registro de usuarios se implementará en la siguiente etapa del proyecto.'
      );

    }
  );

}


if(footerRegister){

  footerRegister.addEventListener(
    'click',
    event => {

      event.preventDefault();

      openDemo(
        'El registro de usuarios se implementará en la siguiente etapa del proyecto.'
      );

    }
  );

}


/* =========================================
   BOTÓN CERRAR MODAL
========================================= */

if(demoClose){

  demoClose.addEventListener(
    'click',
    closeDemo
  );

}


if(demoOk){

  demoOk.addEventListener(
    'click',
    closeDemo
  );

}


/* =========================================
   CERRAR AL TOCAR FUERA
========================================= */

if(demoOverlay){

  demoOverlay.addEventListener(
    'click',
    event => {

      if(event.target === demoOverlay){

        closeDemo();

      }

    }
  );

}


/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
  'keydown',
  event => {

    if(event.key === 'Escape'){

      closeDemo();

    }

  }
);


/* =========================================
   LINKS DE SERVICIOS
========================================= */

document
  .querySelectorAll('.service-link')
  .forEach(link => {

    link.addEventListener(
      'click',
      event => {

        event.preventDefault();

        openDemo(
          'La página detallada de servicios estará disponible en la siguiente etapa de CiberHub.'
        );

      }
    );

  });


/* =========================================
   INICIO
========================================= */

console.log(
  'CiberHub Home cargado correctamente.'
);
