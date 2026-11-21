'use client';

import { useActionState } from 'react';
import { sendContact, type ContactState } from '@/app/contact/actions';
import { Send } from './Icons';

const initialState: ContactState = { status: 'idle', message: '' };

const inputClass =
  'w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
            Nombre <span className="text-red-600 dark:text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            required
            defaultValue={state.values?.name}
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
            className={inputClass}
          />
          {state.errors?.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {state.errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
            Correo electrónico <span className="text-red-600 dark:text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            required
            defaultValue={state.values?.email}
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            className={inputClass}
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
          Mensaje <span className="text-red-600 dark:text-red-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Cuéntame sobre tu proyecto..."
          required
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className={`${inputClass} resize-y`}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition disabled:opacity-60"
      >
        <Send className="w-5 h-5" />
        {pending ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      <p
        aria-live="polite"
        className={`text-sm font-medium ${
          state.status === 'success'
            ? 'text-green-700 dark:text-green-400'
            : 'text-red-600 dark:text-red-400'
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
