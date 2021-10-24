import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import Button from "./Button"

export default function ContactSection() {
    return(
        <section className="container mx-auto px-10 2xl:px-0" id="contact">
            <div className="bg-primarygray flex rounded-lg flex-wrap">
                <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>Beberapa cara menghubungi saya</SectionParagraph>

                        <ContactItem 
                            label="Mail"
                            icon="./mail.svg"
                            value="me@aliif.space"
                            className="mt-10"
                        />
                        <ContactItem 
                            label="Phone"
                            icon="./phone.svg"
                            value="0895331850313"
                            className="mt-6"
                        />
                        <ContactItem 
                            label="Twitter"
                            icon="./twitter.svg"
                            value="@lifrief"
                            className="mt-6"
                        />
                    </div>
                </div>
                <div className="md:w-6/12 w-full">
                    <form className="lg:py-16 lg:px-20 md:p-14 p-10" action="">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">
                                <Field
                                    label="Name"
                                    name="Name"
                                    type="text"
                                />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                                <Field
                                    label="Email"
                                    name="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field 
                            label="Subject"
                            name="subject"
                            type="text"
                        />
                        <Field 
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className="text-right">
                            <Button variant="black" className="ml-auto">send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}