<script>
	import '../app.css';
	import { pwaInfo } from 'virtual:pwa-info'; 

	export const prerender = true;

  	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<slot />
