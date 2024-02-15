import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import TodoForm from "@/ui-components/TodoCreateForm";
import TodoList from "@/ui-components/TodoList";
import HeroLayout1 from "@/ui-components/HeroLayout1";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function HomePage() {



  return (
    <main>
      <h1>Hello, Amplify 👋</h1>
      <TodoList/>
      <TodoForm/>
      <HeroLayout1 />
    </main>
  );
}