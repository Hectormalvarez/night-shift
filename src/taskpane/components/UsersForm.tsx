import * as React from "react";
import { Card } from "@fluentui/react-components";

const TaskPane = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        
      </form>
    </Card>
  );
};

export default TaskPane;
