import { toast } from 'react-toastify';

function ToastifyComponent() {
    let isCssLoaded = false;

    const loadCssOnce = async () => {
        if (!isCssLoaded) {
            await import('react-toastify/dist/ReactToastify.css');
            isCssLoaded = true;
        }
    };

    const success = async (msg) => {
        await loadCssOnce();
        toast.success(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const error = async (msg) => {
        await loadCssOnce();
        toast.error(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return { success, error };
}

export default ToastifyComponent;
