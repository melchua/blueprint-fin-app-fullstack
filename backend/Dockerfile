# Use Python 3.12 slim image
FROM python:3.12-slim

# Set working directory
WORKDIR /app/

# Install system dependencies required for psycopg2
RUN apt-get update && apt-get install -y \
    curl \
    gcc \
    python3-dev \
    libpq-dev

# Install uv using the official installer
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# Copy requirements file
COPY requirements.txt .

# Install dependencies using uv
RUN /root/.cargo/bin/uv pip install --system -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose port 8000
EXPOSE 8000

# Start the FastAPI application with production settings
CMD ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4", "--proxy-headers"]
