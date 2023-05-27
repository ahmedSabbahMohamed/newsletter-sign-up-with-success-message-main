import success from "../images/icon-success.svg";

function Thank() {
    return(
        <>
            <div className="bg-white p-5 px-10 rounded-2xl max-w-sm">
                <img src={success} alt="icon-success" className="w-16 h-auto" />
                <h2 className="text-5xl text-dsgray py-6 font-bold">Thanks for subscribing!</h2>
                <p className="text-cgray">
                    A confirmation email has been sent to <span className="text-dsgray inline-block font-bold">ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription.
                </p>
                <button
                    type="button"
                    className="bg-dsgray text-white rounded-lg w-full p-3 mt-4 hover:bg-gradient-to-r hover:from-tomato hover:to-orange-400 hover:shadow-lg hover:shadow-rose-300"
                >
                    Dismiss message
                </button>
            </div>
        </>
    );
}

export default Thank;