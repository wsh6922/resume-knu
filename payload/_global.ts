import { IGlobal } from "../component/common/IGlobal";

const siteTitle = "wsh6922 / Namuk Kim";
const siteDescription = "Software Engineer, DevOps Engineer, and Graphic Designer. Computer Science and Engineering graduate from Shingu University.";

const _global: IGlobal.Payload = {
    title: siteTitle,

    seo: {
        title: siteTitle,
        description: siteDescription,
        openGraph: {
            title: siteTitle,
            description: siteDescription,
            images: [
                {
                    url: '',
                    width: 1200,
                    height: 630,
                    alt: 'wsh6922 / Namuk Kim'
                },
            ],
            type: 'website',
            url: 'https://www.shiftknu.com',
            site_name: '',
            locale: 'ko_KR'
        }
    }
}

export default _global;