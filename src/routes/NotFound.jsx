import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div id="not-found">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/"><Button variant="contained">Go Back</Button></Link>
    </div>
  );
}

export default NotFound;
