# Shift-Left DevSecOps Pipeline

## Project Report


## 1. Abstract

This project implements an automated Shift-Left DevSecOps pipeline that integrates security testing into the CI/CD lifecycle.

The system detects vulnerabilities early using automated security tools before code reaches production.


## 2. Problem Statement

Traditional security testing happens late in development.

Issues:

- Delayed vulnerability discovery
- Expensive remediation
- Manual security reviews
- Inconsistent security checks


## 3. Proposed Solution

A GitHub Actions based DevSecOps pipeline implementing automated security gates.


## 4. Architecture


Developer

↓

GitHub Repository

↓

GitHub Actions Pipeline


Security Layers:

1. Secret Detection

Tool:
Gitleaks


2. Static Application Security Testing

Tool:
Semgrep


3. Dependency Security

Tool:
Trivy


4. Container Security

Tools:
Docker + Trivy


5. Runtime Security

Tool:
OWASP ZAP


6. Supply Chain Security

Tool:
Syft SBOM


7. Deployment Security

Tool:
Kubernetes Configuration Scanner



## 5. Security Controls Implemented


| Control | Tool |
|-|-|
| Secret Scanning | Gitleaks |
| SAST | Semgrep |
| SCA | Trivy |
| DAST | OWASP ZAP |
| SBOM | Syft |
| Container Scan | Trivy |
| Kubernetes Security | Trivy Config |


## 6. Results

The pipeline successfully:

- Blocks vulnerable commits
- Detects insecure code
- Finds dependency CVEs
- Prevents insecure deployments
- Generates audit evidence


## 7. Conclusion

The project demonstrates how automation improves application security by shifting security validation earlier in SDLC.
