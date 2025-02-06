## Integrating VUE js in astro. 
<script setup>
    import { ref } from 'vue';
    const count = ref(0);

    const incrementCount = () => {
        count.value++;
    }
</script>

<template>
    <button @click="incrementCount"> I am clicked my value {{ count }}</button>
</template>
In this code when client is inside script to access the value we must do client.value but when inside template we cam simply do client. For example:
<button @click="count++"> </button>
and

const incrementCount=()=>{
    count.value ++
}

## When to use Vue and when to use Astro
Astro generally static site generation ko laagi ho. So therefore contents that don't require frequent changes can be done using Astro, for example the header, footer, layout. Whereas some components that need state management, need to be dynamic and all that, we can go with Vue. Remember: Astro vitra Vue auxa Vue vitra Astro audaina.

using watch: Watch hamro useEffect jasto ho. Watches for any changes in short side effect.
## Emit function


## Best Practices for Using Vue in Astro

When integrating Vue components into your Astro project, keep these 
best practices
 in mind:

Minimize client-side JavaScript: Use Astro components for static content and Vue components only where 
interactivity
 is needed.

Choose appropriate client directives: Use client:load sparingly and prefer client:idle or client:visible when possible to improve initial page load performance.

Leverage Vue's Composition API: It provides a more flexible and performant way to organize component logic.

Keep components small and focused: This improves reusability and makes it easier to reason about your code.

Use TypeScript: Both Astro and Vue support 
TypeScript
, which can help catch errors early and improve developer experience.

Optimize for production: Ensure you're using Astro's production build command (astro build) when deploying your site.

Consider server-side rendering: For dynamic content that doesn't need client-side interactivity, use Astro's built-in server-side rendering capabilities instead of Vue components.


## Image changer and imageChangerRenderer
Image changer being the vue component and imageChangeRenderer being the astro component, these are the ones used to demonstrate the communication between astro and vue. 
Astro --> vue (prop passing)
Vue --> Astro (event dispatching)

## ImageChangeRenderer and imageSlider
This is where we hydrate when the slider is only visible. Before the slider is even visible we don't need any of the javascript that is for interaction with anchor buttons.

## Newsletter and newsletter renderer
This is where we hydrate the necessary js for the form only when visible. Like the validation code and all that.

## Variable sharing in vue 
The provide function must be called in a parent component and inject must be used in a descendant component. Provide ko through we make that variable avaliable and then inject ko through access garne. Bascially parent component mah provide hunxa tesbata child mah pathaune. So for any global variables we can just create an upper parent which will provide and where required the child will inject. 

## Visualization
Island ko basis mah visualize garne. Header? It's an interactive island does it need vue no. Like that. 

## Component's reactive state
Ho hamro template mah kunai variable store garnu paryo vane tyo component ko reactive state mah store hunu parxa. And that happens when you use the ref. Just as we did in api-call.

## Pinia starts here ---
## Store
React mah redux vue mah Pinia. So redux store jastai Pinia store hune. Simply hamro euta entitiy vanam jasle hamro global states ra buisness logic haru hold garxan ra eta bata jasle pani access garna sakxa. Store mah 3 ota kura hunxa, state, getters and action. Getters vaneko computed properties of the data.
Creating a Pinia store : 
import defineStore and then a variable to be exported from store.ts;
export const store = defineStore()
defineStore function takes two arguments, first being the name of the store (id of the store) and second being the object that contains state and actions as the keys. 
state:()=>({count}) this is the initial value of the variable 
now actions:{
    functionName(){
        count++ or anything
    }
}
## Error 
 "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production. 
Basically Pinia ko store rely garxa pinia ko instance mah depend hunxa jasko help bata tyo hamro store ko instance haru sabai tira share garxan. Dherai jaso it does work, jasma useStore() function call garna milxa. Tara iniharu component bahira vayo vane testo hudaina. useStore() le pinia instance inject garnu paryo hamro app mah, tara kaile kaii tyo automatically inject hudaina, so yesto bela manually hamile teslai useStore function mah provide garnu parxa. 


