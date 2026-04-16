import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const Mailbox = lazy(() => import('./Mailbox/'));
const Chat = lazy(() => import('./Chat/'));
const FaqSection = lazy(() => import('./FaqSection/'));

const Applications = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="mailbox" element={<Mailbox />} />
        <Route path="chat" element={<Chat />} />
        <Route path="faq-section" element={<FaqSection />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default Applications;
