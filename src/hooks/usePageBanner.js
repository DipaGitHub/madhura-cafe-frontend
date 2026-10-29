import { useState, useEffect } from 'react';
import { apiUrl, imageUrl } from '../config/api';

const usePageBanner = (pageTitle) => {
    const [bannerUrl, setBannerUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            if (!pageTitle) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(apiUrl(`/api/page-banners/${encodeURIComponent(pageTitle)}`));
                if (!response.ok) {
                    throw new Error('Banner not found or error fetching');
                }
                const data = await response.json();
                if (data && data.data && data.data.image_url) {
                    setBannerUrl(imageUrl(data.data.image_url));
                }
            } catch (err) {
                console.error(`Failed to fetch banner for ${pageTitle}:`, err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBanner();
    }, [pageTitle]);

    return { bannerUrl, loading, error };
};

export default usePageBanner;
