-- ========================================================
-- MADHURA'S CAFE - MYSQL SCHEMA INITIALIZATION
-- Database: madhura-cafe
-- ========================================================

CREATE TABLE IF NOT EXISTS admin_banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_mobile_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    description TEXT,
    scope_title VARCHAR(255),
    scope_content TEXT,
    meta_title VARCHAR(255),
    meta_keyword VARCHAR(255),
    meta_description TEXT,
    image_url VARCHAR(255),
    service_image_url VARCHAR(255),
    banner_image_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    publish_date DATE,
    tags VARCHAR(255),
    banner_image VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    short_description TEXT,
    author VARCHAR(255) DEFAULT 'Madhura Cafe Team',
    content LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_latest_updates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    update_date DATE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment TEXT,
    review_stars INT DEFAULT 5,
    client_name VARCHAR(255),
    client_position VARCHAR(255),
    client_company VARCHAR(255),
    image_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_faq (
    id INT AUTO_INCREMENT PRIMARY KEY,
    qus TEXT NOT NULL,
    answers TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS logo_carousel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS service_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone_number VARCHAR(50) NOT NULL,
    service_type VARCHAR(255),
    comments TEXT,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
