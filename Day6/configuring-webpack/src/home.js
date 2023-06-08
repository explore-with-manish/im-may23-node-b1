// import { log } from './util';

// function register(email) {
//     log(`registering ${email}`);
// }

// register('manish@abc.com');

// ----------------------------------- Dynamic Import

function register(email) {
    import('./util').then((module) => {
        module.log(`registering ${email}`);
    }).catch((error) => {
        console.error("Module cannot be loaded...");
    });
}

register('manish@abc.com');