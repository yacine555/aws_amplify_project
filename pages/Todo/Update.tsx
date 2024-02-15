import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import TodoUpdateForm from "@/ui-components/TodoUpdateForm";
import TodoList from "@/ui-components/TodoList";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function TodoUpdate() {


  return (
    <main>
      <h1>Hello, Amplify 👋</h1>
      <TodoList/>
      <TodoUpdateForm/>
    </main>
  );
}