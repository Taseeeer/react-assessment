import Feedback from "../components/Feedback";

export default function Essay() {

    return(
        <div className="container-outermost">

            <div>
                {/* Feedback is a component, in the components folder, which holds inside all the logic for the feedback section,
                    this is to void spaghetti code, and to make sure our app remains clean, well architected and easy to work with. */}
                <Feedback />
            </div>

            <div className="essay-inner">
                <h2 className="essay-title">Example Title</h2>
                <div className="essay-paragraphs">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste incidunt ipsam quas quam cupiditate distinctio vel, eos perferendis similique eaque consequuntur odio totam sed exercitationem non quis consequatur eveniet?
                    </p>
                </div>
            </div>


        </div>
    )
}