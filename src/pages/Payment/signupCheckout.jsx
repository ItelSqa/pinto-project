import React, { useState } from "react";

const SignupCheckout = ({ onSignupComplete }) => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async () => {
        try {
            const response = await apiService.post("/wp-json/learndash/v1/register", formData);
            if (response.data.success) {
                onSignupComplete(response.data.user); // Update frontend user context
            } else {
                alert("Signup failed!");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div>
            <h2>Signup & Checkout</h2>
            <input name="name" placeholder="Full Name" onChange={handleInputChange} />
            <input name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            <button onClick={handleSignup}>Signup & Proceed to Checkout</button>
        </div>
    );
};

export default SignupCheckout;
