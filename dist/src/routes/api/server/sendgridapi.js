import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY } from '$env/static/private';
export async function useSGmail(testMSG) {
    try {
        const output = await emailjs
            .sendForm('service_taqk7tr', 'template_vod9j69', testMSG, EMAILJS_PUBLIC_KEY)
            .then((res) => res);
        return {
            body: `message sent: ${output}`
        };
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGdyaWRhcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL2FwaS9zZXJ2ZXIvc2VuZGdyaWRhcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFekQsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLENBQUMsT0FBaUM7SUFDaEUsSUFBSTtRQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTzthQUMxQixRQUFRLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixDQUFDO2FBQzVFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsT0FBTztZQUNOLElBQUksRUFBRSxpQkFBaUIsTUFBTSxFQUFFO1NBQy9CLENBQUM7S0FDRjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7QUFDRixDQUFDIn0=