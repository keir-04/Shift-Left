# Shift-Left DevSecOps Pipeline Architecture


## Workflow


Developer Commit

        |

        v

GitHub Repository

        |

        v

GitHub Actions CI/CD


        |

        +---- Gitleaks
        |       Secret Detection


        +---- Semgrep
        |       Static Application Security Testing


        +---- Trivy
        |       Dependency Vulnerability Scanning


        +---- Docker Build


        +---- Trivy Image Scan
        |       Container Security


        +---- OWASP ZAP
        |       Dynamic Application Security Testing


        +---- Syft SBOM
        |       Supply Chain Security


        +---- Security Report Generator


        |

        v

Secure Build Artifact
