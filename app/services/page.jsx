"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";
import Toast from "../components/Toast";
import Services from "../components/Services";

export default function ServicesPage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <>
      <Header currentPage="services" openModal={() => setShowModal(true)} />
      
      <main className="flex-grow relative">
        <Services openModal={() => setShowModal(true)} />
      </main>

      <Footer currentPage="services" openModal={() => setShowModal(true)} />

      {showModal && <QuoteModal close={() => setShowModal(false)} showToast={() => setToast(true)} />}
      <Toast show={toast} />
    </>
  );
}
