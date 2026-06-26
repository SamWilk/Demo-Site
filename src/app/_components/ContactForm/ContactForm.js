"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending request..." : "Send request"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactRequest, initialState);

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      aria-label="Request service from Burress Home Services"
    >
      <div className={styles.formHeader}>
        <p>Request service</p>
        <h2>Tell us what needs to be fixed.</h2>
        <span>Most jobs start with a quick call and a few project details.</span>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(904) 555-0123"
            required
          />
        </label>
      </div>

      <label>
        Service needed
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          <option>Handyman repair</option>
          <option>Drywall or painting</option>
          <option>Door, window, or cabinet work</option>
          <option>Deck, tile, or flooring</option>
          <option>Plumbing, electrical, or appliance help</option>
          <option>Remodeling or renovation support</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="details"
          rows="4"
          placeholder="Briefly describe the repair, location, timing, and any details that would help."
          required
        />
      </label>

      <SubmitButton />

      {state.message ? (
        <p className={state.ok ? styles.successMessage : styles.errorMessage}>
          {state.message}
        </p>
      ) : null}

      <p className={styles.formNote}>
        Prefer to talk now? <a href="tel:+19048850229">Call (904) 885-0229</a>.
      </p>
    </form>
  );
}
