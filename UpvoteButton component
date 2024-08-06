// components/UpvoteButton.js
import { useState } from 'react';
import { Button, Group } from '@mantine/core';

const UpvoteButton = () => {
  const [upvoted, setUpvoted] = useState(false);

  return (
    <Group position="center" className="p-5">
      <Button
        onClick={() => setUpvoted(!upvoted)}
        className="px-4 py-2"
        size="md"
        radius="md"
      >
        {upvoted ? 'Upvoted' : 'Upvote'}
      </Button>
    </Group>
  );
};

export default UpvoteButton;
