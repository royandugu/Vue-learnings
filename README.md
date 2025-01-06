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