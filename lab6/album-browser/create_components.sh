#!/bin/bash
# About Component CSS
cat > src/app/components/about/about.component.css << 'EOF'
.about-container {
  animation: slideIn 0.5s ease-in;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}
.page-title:after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 1rem auto;
  border-radius: 2px;
}
.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}
.info-card h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}
.info-item {
  display: flex;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #f0f0f0;
}
.info-label {
  font-weight: 600;
  color: #667eea;
  width: 120px;
}
.info-value {
  color: #666;
  flex: 1;
}
.tech-list, .features-list {
  list-style: none;
  padding: 0;
}
.tech-list li, .features-list li {
  padding: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
}
.tech-list li:before {
  content: '🚀';
  margin-right: 0.5rem;
  font-size: 1rem;
}
.features-list li:before {
  content: '✨';
  margin-right: 0.5rem;
  font-size: 1rem;
}
.features-list li {
  color: #28a745;
}
EOF
echo "About component CSS created"
