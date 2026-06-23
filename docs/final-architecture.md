# Shift-Left DevSecOps Pipeline Architecture


## Objective

To detect security vulnerabilities early in the Software Development Lifecycle using automated security gates integrated with CI/CD.


## Workflow


Developer

   |

   v


GitHub Repository


   |

   v


GitHub Actions CI/CD Pipeline


   |

   +-------------------------------+

   |                               |

Secret Security                Gitleaks

Source Code Security           Semgrep

Dependency Security            Trivy SCA

Container Security             Trivy Image Scan

Runtime Security               OWASP ZAP

Supply Chain Security          Syft SBOM

Security Visibility            SARIF Dashboard

Deployment Security            Kubernetes Scan


   |

   v


Secure Application Delivery


## Security Philosophy

Find vulnerabilities before production deployment.
