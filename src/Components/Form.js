import { useFormik } from "formik";
import list from "../images/icon-list.svg";
import * as Yup from "yup";

function Form() {
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("email riquired").email("invalid email address")
        }),
        onSubmit: (values) => {
            let comlete = document.querySelector(".success");
            let form = document.querySelector(".subscribe");
            form.classList.add("hidden");
            comlete.classList.remove("hidden");
        },
    });
    return(
        <>
            <h1 className="text-dsgray font-bold text-4xl pb-4">Stay updated!</h1>
            <h2 className="text-cgray text-lg">
                Join 60,000+ product managers receiving monthly updates on:
            </h2>
            <ul className="mt-4">
                <li className="text-cgray pb-3">
                    <img
                        className="inline-block mr-4"
                        src={list}
                        alt="list-icon"
                    />
                    Product discovery and building what matters
                </li>
                <li className="text-cgray pb-3">
                    <img
                        className="inline-block mr-4"
                        src={list}
                        alt="list-icon"
                    />
                    Measuring to ensure updates are a success
                </li>
                <li className="text-cgray pb-3">
                    <img
                        className="inline-block mr-4"
                        src={list}
                        alt="list-icon"
                    />
                    And much more!
                </li>
            </ul>
            <form onSubmit={formik.handleSubmit}>
                <div className="">
                    <label
                        htmlFor="email"
                        className={`block font-bold text-dsgray text-sm p-2 ${formik.touched.email && formik.errors.email ? "text-tomato" : ""}`}
                    >
                        {`${formik.touched.email && formik.errors.email ? formik.errors.email: "Email address"}`}
                    </label>
                    <input
                        type="email"
                        placeholder="email@company.com"
                        className={`w-full border border-gray rounded-lg p-3 mb-6 focus:ring-gray ${formik.touched.email && formik.errors.email ? "border-tomato bg-red-200" : ""}`}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                        id="email"
                    />
                </div>
                <button
                    className="bg-dsgray text-white rounded-lg w-full p-4 hover:bg-gradient-to-r hover:from-tomato hover:to-orange-400 hover:shadow-xl hover:shadow-rose-300"
                    type="submit"
                >
                    Subscribe to monthly newsletter
                </button>
            </form>
        </>
    );
}

export default Form;