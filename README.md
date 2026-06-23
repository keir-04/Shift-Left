[![Shift Left Security Gate Pipeline](https://github.com/keir-04/Shift-Left/actions/workflows/devsecops.yml/badge.svg)](https://github.com/keir-04/Shift-Left/actions/workflows/devsecops.yml)

# Shift-Left DevSecOps Security Pipeline


## Overview

This project demonstrates an automated Shift-Left DevSecOps pipeline integrated with GitHub Actions.

Security checks are executed early in the Software Development Lifecycle before deployment.


## Features

- Secret Detection
- Static Application Security Testing
- Dependency Vulnerability Analysis
- Container Image Security
- Dynamic Web Application Testing
- Software Bill of Materials Generation
- Automated Security Reporting


## Technology Stack

Application:

- Node.js
- Express.js
- Docker


Security Tools:

| Purpose | Tool |
|-|-|
| Secret Scanning | Gitleaks |
| SAST | Semgrep |
| SCA | Trivy |
| Container Scan | Trivy |
| DAST | OWASP ZAP |
| SBOM | Syft |


## Pipeline Flow


Developer Push

↓

GitHub Actions

↓

Security Gates

↓

Secure Build


## Security Gates

The pipeline fails automatically when:

- Secrets are detected
- High-risk vulnerabilities exist
- Container vulnerabilities are found


## Reports Generated

- ZAP DAST Report
- CycloneDX SBOM
- Security Summary Report


## Purpose

This prototype helps development teams detect security issues early and reduce remediation cost.
