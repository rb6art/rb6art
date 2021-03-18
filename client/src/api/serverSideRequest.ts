import axios, { AxiosInstance } from 'axios'

export default ({ req }: any): AxiosInstance => {
  /**
   * Cross Namespace Service Communication in Kubernetes using NGINX
   *
   * This JSON file will be used in client-side routing through next/link (documentation)
   * or next/router (documentation). When you navigate to a page that’s pre-rendered using
   * getStaticProps, Next.js fetches this JSON file (pre-computed at build time) and uses
   * it as the props for the page component. This means that client-side page transitions
   * will not call getStaticProps as only the exported JSON is used.
   *
   * We need to also pass through the Header that contains the sessionCookie or
   * this will always return {currentUser: null}
   * Because we are using JWT to authenticate calls.
   *
   * This is the route needed to communicate to the auth microservice.
   * This is needed bc we are making this call inside of the kubernetes cluster and on the server.
   * { http://NAMEOFSERVICE.NAMESPACE.svc.cluster.local }  the service in this case is Ingress Nginx
   */

  if (typeof window === 'undefined') {

    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/',
      headers: req.headers
    });

  } else {
    // We must be on the browser
    return axios.create({
      baseURL: '/',
    });
  }
}
