// useVerifyToken.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UseVerifyToken() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
     async function verify(){
      try {
        await axios.get('https://down-syndrome-api.vercel.app/api/admin/dashboard', {
          withCredentials: true
        });
        setLoading(false);
      } catch (err) {
        console.log("AccessToken expired or invalid, trying refresh token...",err);

        try {
          await axios.post('https://down-syndrome-api.vercel.app/api/admin/refreshToken', {}, {
            withCredentials: true
          });

          await axios.get('https://down-syndrome-api.vercel.app/api/admin/dashboard', {
            withCredentials: true
          });

          setLoading(false);
        } catch (refreshErr) {
          console.error("Refresh failed, redirect to login", refreshErr);
          navigate('/admin/login');
        }
      }
    };

    verify();
  }, [navigate]);

  return { loading };
}
