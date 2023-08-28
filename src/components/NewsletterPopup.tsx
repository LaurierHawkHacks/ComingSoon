import React from "react";

const NewsletterPopup = () => (
    <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <div id="mc_embed_signup">
            <form action="https://lauriercs.us5.list-manage.com/subscribe/post?u=44bda2b4c75912f2bc5492a7d&amp;id=c744c809de&amp;f_id=00ce6ae9f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_self"
                noValidate={false}
            >
                <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div className="indicates-required">
                        <span className="asterisk">*</span> indicates required
                    </div>

                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required={false} value="" />
                    </div>

                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                        <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                    </div>

                    <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                        <input type="text" name="b_44bda2b4c75912f2bc5492a7d_c744c809de" tabIndex={-1} value="" />
                    </div>

                    <div className="clear">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                    </div>
                </div>
            </form>
        </div>
    </div>
);

export { NewsletterPopup };
