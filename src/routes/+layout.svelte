<script>
	import '../app.css';
	import { pwaInfo } from 'virtual:pwa-info'; 

  	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<slot />
