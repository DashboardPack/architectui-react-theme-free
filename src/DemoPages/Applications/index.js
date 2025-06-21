import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// APPLICATIONS

import Mailbox from "./Mailbox/";
import Chat from "./Chat/";
import FaqSection from "./FaqSection/";

const Applications = () => (
  <Fragment>
    <Routes>
      <Route path="mailbox" element={<Mailbox />} />
      <Route path="chat" element={<Chat />} />
      <Route path="faq-section" element={<FaqSection />} />
    </Routes>
  </Fragment>
);

export default Applications;
