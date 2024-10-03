import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mgvwgdyz");

    return (
        <div className="mt-8 px-6 pb-8 text-white border-b-2" id="contact">
            <h1 className="text-4xl font-bold">
                Contact
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2" action='https://formspree.io/f/mgvwgdyz'>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium mb-1">Adresse Email :</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Votre adresse email..."
                        className="w-full p-3 bg-black rounded-lg shadow-neon focus:outline-none focus:border-white"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-lg font-medium mb-1">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Votre message..."
                        className="w-full p-3 bg-black rounded-lg shadow-neon focus:outline-none"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                    />
                </div>
                <div className="sm:col-span-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="px-6 py-3 bg-black text-white rounded-lg shadow-neon transition-colors duration-300 ease-in-out hover:text-black hover:bg-white focus:outline-none"
                    >
                        {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
