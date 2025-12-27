"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";
import Toast from "../components/Toast";
import About from "../components/About";

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <>
      <Header currentPage="about" openModal={() => setShowModal(true)} />
      
      <main className="flex-grow relative">
        <About />
      </main>

      <Footer currentPage="about" openModal={() => setShowModal(true)} />

      {showModal && <QuoteModal close={() => setShowModal(false)} showToast={() => setToast(true)} />}
      <Toast show={toast} />
    </>
  );
}
