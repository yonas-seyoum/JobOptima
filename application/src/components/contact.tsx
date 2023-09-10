
import React from "react";

export default function About() {
    return (
        <div>
            <div>Contact us</div>
            <div>
                <div>
                    <div>
                        <div>Full Name</div>
                        <div><input type="text" /></div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Email *</div>
                        <div><input type="text" /></div>
                    </div>
                    <div>
                        <div>Qualification *</div>
                        <div><input type="text" /></div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Message</div>
                        <div><textarea></textarea></div>
                    </div>
                </div>

                <div>
                    <input type="button" value="Submit" />
                </div>
            </div>
        </div>
    )
}


