<script context="module">
    import Foo from './Foo.svelte';

    export const meta = {
        title: "Example/Foo",
        component: { Foo },
    }
</script>

<script>
	import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
    <Foo />
</Template>

<Story name="Default" id="FooDefault" />