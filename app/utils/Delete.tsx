'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

type Props = {
  id: string | number;
};

function Delete({ id }: Props) {
  const onDelete = useMutation({
    mutationKey: ['delete'],
    mutationFn: async () => {
      await axios.delete(`/api/main/${id}`);
    },
  });

  return (
    <button
      onClick={() => {
        onDelete.mutate();
      }}>
      삭제~~~~
    </button>
  );
}

export default Delete;
