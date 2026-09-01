import React, { useState, useMemo } from 'react';
import {
  Search,
  Activity,
  Zap,
  Bone,
  Disc,
  Shield,
  Compass,
  Lock,
  Sun,
  X,
  Baby,
  CheckCircle2,
  Clock,
  Sparkles,
  LayoutGrid,
  Table as TableIcon,
  Phone,
  Stethoscope,
  AlertCircle,
  Truck
} from 'lucide-react';
import { conditionsData, Condition } from '../data/conditions';
import { AppointmentModal } from './AppointmentModal';
import { BUSINESS_INFO } from '../config/business';

export const ConditionsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSymptomPill, setActiveSymptomPill] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'matrix' | 'cards'>('matrix');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCondition, setActiveCondition] = useState<Condition | null>(null);

  const categories = ['All', 'Joint', 'Spine', 'Sports', 'Bone', 'Pediatric'];

  // Concise quick symptom matcher tags
  const quickSymptoms = [
    { label: 'All Symptoms', match: null },
    { label: '🦴 Knee Pain & Arthritis', match: 'knee-osteoarthritis' },
    { label: '⚡ ACL / Knee Instability', match: 'acl-tear' },
    { label: '⚡ Sciatica Leg Pain', match: 'sciatica' },
    { label: '🔄 Slipped Disc Spasms', match: 'slipped-disc' },
    { label: '💪 Shoulder & Arm Pain', match: 'rotator-cuff' },
    { label: '👵 Bone Fragility & Fall', match: 'osteoporosis-fractures' },
    { label: '🎯 Neck Pain & Tingling', match: 'cervical-spondylosis' },
    { label: '❄️ Frozen Shoulder', match: 'frozen-shoulder' },
    { label: '🧒 Child Limping / Fracture', match: 'pediatric-fractures' },
    { label: '🚨 Emergency Fracture', match: 'acute-trauma-fractures' }
  ];

  const filteredConditions = useMemo(() => {
    return conditionsData.filter((c) => {
      if (activeSymptomPill && c.id !== activeSymptomPill) {
        return false;
      }

      const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        c.name.toLowerCase().includes(query) ||
        c.shortDesc.toLowerCase().includes(query) ||
        c.bodyRegion.toLowerCase().includes(query) ||
        c.conservativeCare.toLowerCase().includes(query) ||
        c.surgicalOption.toLowerCase().includes(query) ||
        c.symptoms.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, activeSymptomPill]);

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return conditionsData.length;
    return conditionsData.filter((c) => c.category === cat).length;
  };

  const getConditionIcon = (iconName: string, size = 18) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={size} color="#ffffff" />;
      case 'Disc':
        return <Disc size={size} color="#ffffff" />;
      case 'Bone':
        return <Bone size={size} color="#ffffff" />;
      case 'Zap':
        return <Zap size={size} color="#ffffff" />;
      case 'Shield':
        return <Shield size={size} color="#ffffff" />;
      case 'Sun':
        return <Sun size={size} color="#ffffff" />;
      case 'Compass':
        return <Compass size={size} color="#ffffff" />;
      case 'Baby':
        return <Baby size={size} color="#ffffff" />;
      default:
        return <Lock size={size} color="#ffffff" />;
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'Emergency 24/7':
        return {
          bg: '#fee2e2',
          color: '#b91c1c',
          border: '1px solid #fca5a5',
          label: '24/7 Emergency'
        };
      case 'Priority OPD':
        return {
          bg: '#e0f2fe',
          color: '#0369a1',
          border: '1px solid #bae6fd',
          label: 'Priority OPD'
        };
      default:
        return {
          bg: '#f1f5f9',
          color: '#475569',
          border: '1px solid #e2e8f0',
          label: 'Routine Consult'
        };
    }
  };

  const handleOpenModal = (condition: Condition) => {
    setActiveCondition(condition);
    setIsModalOpen(true);
  };

  return (
    <section
      id="conditions-treated"
      style={{
        padding: '4rem 0 3.5rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--blue-soft)',
              color: 'var(--blue-brand)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem',
              border: '1px solid rgba(2, 132, 199, 0.2)'
            }}
          >
            <Sparkles size={14} color="var(--blue-brand)" />
            <span>Comprehensive Care Matrix</span>
          </div>

          <h2 className="heading-lg" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', marginBottom: '0.6rem', color: 'var(--navy-primary)' }}>
            Conditions <span style={{ color: 'var(--blue-brand)' }}>We Treat</span>
          </h2>

          <p style={{ fontSize: '0.96rem', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Concise symptom guides, non-surgical therapies, 24/7 home diagnostics, and precision surgical pathways.
          </p>
        </div>

        {/* Clinical Highlights Strip */}
        <div
          className="matrix-stats-bar"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            marginBottom: '1.75rem',
            backgroundColor: 'var(--navy-dark)',
            borderRadius: 'var(--radius-md)',
            padding: '0.9rem 1.25rem',
            color: '#ffffff',
            boxShadow: '0 4px 16px rgba(7, 21, 46, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Shield size={18} color="#38bdf8" />
            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>92%+ Non-Surgical First</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Truck size={18} color="#38bdf8" />
            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>24/7 Doorstep Home X-Ray</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Stethoscope size={18} color="#38bdf8" />
            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Sub-Specialist Ortho Surgeons</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Clock size={18} color="#38bdf8" />
            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Rapid Mobility Protocols</div>
          </div>
        </div>

        {/* Symptom Quick Matcher Chips */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Search size={13} color="var(--blue-brand)" /> Quick Symptom Matcher:
            </span>
            {activeSymptomPill && (
              <button
                onClick={() => {
                  setActiveSymptomPill(null);
                  setSelectedCategory('All');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--blue-brand)',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}
              >
                Reset <X size={13} />
              </button>
            )}
          </div>

          <div
            className="symptom-chips-container"
            style={{
              display: 'flex',
              gap: '0.4rem',
              overflowX: 'auto',
              paddingBottom: '0.4rem',
              scrollbarWidth: 'none'
            }}
          >
            {quickSymptoms.map((pill, idx) => {
              const isSelected = activeSymptomPill === pill.match || (!activeSymptomPill && pill.match === null);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSymptomPill(pill.match);
                    if (pill.match !== null) {
                      setSelectedCategory('All');
                    }
                  }}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 800 : 600,
                    backgroundColor: isSelected ? 'var(--navy-primary)' : 'var(--bg-subtle)',
                    color: isSelected ? '#ffffff' : 'var(--navy-primary)',
                    border: isSelected ? '1.5px solid var(--navy-primary)' : '1px solid var(--border-color)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                    flexShrink: 0
                  }}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div
          className="conditions-control-bar"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            backgroundColor: 'var(--bg-subtle)',
            padding: '0.7rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(10, 31, 68, 0.08)'
          }}
        >
          {/* Category Tabs */}
          <div
            className="category-pill-group"
            style={{
              display: 'flex',
              gap: '0.35rem',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat && !activeSymptomPill;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveSymptomPill(null);
                  }}
                  style={{
                    padding: '0.32rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    border: '1px solid transparent',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--blue-brand)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--navy-primary)',
                    borderColor: isActive ? 'var(--blue-brand)' : 'var(--border-color)',
                    transition: 'all 0.15s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    flexShrink: 0
                  }}
                >
                  <span>{cat} {cat !== 'All' ? 'Care' : ''}</span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--blue-soft)',
                      color: isActive ? '#ffffff' : 'var(--blue-brand)',
                      padding: '0.08rem 0.4rem',
                      borderRadius: '8px'
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search + View Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'flex-end' }}>
            {/* Search Input Box */}
            <div style={{ position: 'relative', minWidth: '200px', flexGrow: 1, maxWidth: '280px' }}>
              <input
                type="text"
                placeholder="Search condition or symptom..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeSymptomPill) setActiveSymptomPill(null);
                }}
                style={{
                  width: '100%',
                  padding: '0.45rem 1.8rem 0.45rem 2.2rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  backgroundColor: '#ffffff',
                  color: 'var(--navy-primary)',
                  outline: 'none'
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--blue-brand)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
              />
              <Search
                size={14}
                style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#64748b'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  style={{
                    position: 'absolute',
                    right: '0.6rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div
              style={{
                display: 'inline-flex',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-pill)',
                padding: '0.15rem',
                border: '1px solid var(--border-color)'
              }}
            >
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: viewMode === 'matrix' ? 'var(--navy-primary)' : 'transparent',
                  color: viewMode === 'matrix' ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                <TableIcon size={13} />
                <span>Matrix</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('cards')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: viewMode === 'cards' ? 'var(--navy-primary)' : 'transparent',
                  color: viewMode === 'cards' ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                <LayoutGrid size={13} />
                <span>Cards</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredConditions.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-color)'
            }}
          >
            <AlertCircle size={32} color="var(--blue-brand)" style={{ margin: '0 auto 0.75rem auto' }} />
            <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
              No matching conditions found
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Try clearing your search query or selecting "All Care".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setActiveSymptomPill(null);
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* VIEW 1: CARE MATRIX */}
        {filteredConditions.length > 0 && viewMode === 'matrix' && (
          <div
            className="care-matrix-wrapper"
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(10, 31, 68, 0.1)',
              boxShadow: '0 4px 20px rgba(10, 31, 68, 0.05)',
              overflow: 'hidden',
              marginBottom: '2rem'
            }}
          >
            {/* Matrix Header */}
            <div
              className="matrix-header-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1.2fr 1.8fr 1.1fr',
                backgroundColor: 'var(--navy-primary)',
                color: '#ffffff',
                padding: '0.85rem 1rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                gap: '0.75rem'
              }}
            >
              <div>Condition & Area</div>
              <div>Key Symptoms</div>
              <div>Care Pathway (Non-Surgical / Surgical)</div>
              <div style={{ textAlign: 'right' }}>Diagnostics & Care</div>
            </div>

            {/* Matrix Rows */}
            {filteredConditions.map((item, index) => {
              const urgencyStyle = getUrgencyBadge(item.urgency);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="matrix-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.3fr 1.2fr 1.8fr 1.1fr',
                    padding: '1rem',
                    borderBottom: index < filteredConditions.length - 1 ? '1px solid #edf2f7' : 'none',
                    backgroundColor: isEven ? '#ffffff' : '#f8fafc',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  {/* Column 1: Condition & Area */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #0284c7 0%, #0a1f44 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {getConditionIcon(item.icon, 16)}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0, lineHeight: 1.2 }}>
                          {item.name}
                        </h4>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600 }}>
                          {item.bodyRegion}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.66rem',
                          fontWeight: 800,
                          backgroundColor: urgencyStyle.bg,
                          color: urgencyStyle.color,
                          border: urgencyStyle.border,
                          padding: '0.1rem 0.45rem',
                          borderRadius: 'var(--radius-pill)'
                        }}
                      >
                        {urgencyStyle.label}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Key Symptoms */}
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {item.symptoms.map((sym, sIdx) => (
                        <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.3rem', lineHeight: 1.25 }}>
                          <span style={{ color: '#ef4444', fontWeight: 900, fontSize: '0.85rem', lineHeight: 1 }}>•</span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Care Pathway */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem', fontSize: '0.78rem', lineHeight: 1.3 }}>
                      <CheckCircle2 size={13} color="var(--blue-brand)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontWeight: 800, color: 'var(--navy-primary)' }}>1st Line: </span>
                        <span style={{ color: 'var(--text-secondary)' }}>{item.conservativeCare}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem', fontSize: '0.78rem', lineHeight: 1.3 }}>
                      <Zap size={13} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontWeight: 800, color: 'var(--navy-primary)' }}>Surgical: </span>
                        <span style={{ color: 'var(--text-secondary)' }}>{item.surgicalOption}</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 4: Action & Diagnostic */}
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'flex-end' }}>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(item)}
                      className="btn btn-primary btn-sm"
                      style={{
                        fontSize: '0.76rem',
                        padding: '0.35rem 0.75rem',
                        gap: '0.25rem',
                        width: '100%',
                        maxWidth: '140px',
                        justifyContent: 'center'
                      }}
                    >
                      <Stethoscope size={13} /> Consult Care
                    </button>

                    <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', lineHeight: 1.2, textAlign: 'right' }}>
                      {item.homeXRayEligible ? (
                        <span style={{ color: '#15803d', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Truck size={11} /> 24/7 Home X-Ray
                        </span>
                      ) : (
                        <span>{item.diagnosticTools}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: COMPACT DIAGNOSTIC CARDS */}
        {filteredConditions.length > 0 && viewMode === 'cards' && (
          <div
            className="conditions-card-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem'
            }}
          >
            {filteredConditions.map((condition) => {
              const urgencyStyle = getUrgencyBadge(condition.urgency);

              return (
                <div
                  key={condition.id}
                  className="condition-card-box"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    border: '1px solid rgba(10, 31, 68, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 14px rgba(10, 31, 68, 0.04)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  {/* Top Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #0284c7 0%, #0a1f44 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {getConditionIcon(condition.icon, 18)}
                    </div>

                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        backgroundColor: urgencyStyle.bg,
                        color: urgencyStyle.color,
                        border: urgencyStyle.border,
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      {urgencyStyle.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.2rem', color: 'var(--navy-primary)', lineHeight: 1.25 }}>
                    {condition.name}
                  </h3>
                  <div style={{ fontSize: '0.74rem', color: 'var(--blue-brand)', fontWeight: 700, marginBottom: '0.6rem' }}>
                    📍 {condition.bodyRegion}
                  </div>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.85rem' }}>
                    {condition.shortDesc}
                  </p>

                  {/* Key Symptoms */}
                  <div style={{ padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', marginBottom: '0.85rem' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--navy-primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      Key Warning Signs:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                      {condition.symptoms.map((sym, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.3rem' }}>
                          <span style={{ color: '#ef4444', fontWeight: 800 }}>•</span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pathway Box */}
                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', marginBottom: '0.85rem', fontSize: '0.76rem' }}>
                    <div style={{ marginBottom: '0.25rem', color: 'var(--navy-primary)' }}>
                      <strong>Non-Surgical:</strong> {condition.conservativeCare}
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                      <strong>Surgical:</strong> {condition.surgicalOption}
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    onClick={() => handleOpenModal(condition)}
                    className="btn btn-primary btn-sm"
                    style={{
                      width: '100%',
                      fontSize: '0.8rem',
                      padding: '0.45rem',
                      justifyContent: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Stethoscope size={13} /> Consult Specialist
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Patient Guidance & 24/7 Helpline Strip */}
        <div
          className="matrix-bottom-banner"
          style={{
            backgroundColor: 'var(--blue-soft)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '2rem'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--blue-brand)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              📞 24/7 Orthopedic Emergency & Home Triage
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0, lineHeight: 1.3 }}>
              Unsure about your diagnosis or need a Home X-Ray?
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
              Our clinical coordinator will help triage your condition or dispatch a mobile digital X-Ray technician to your home in 20–30 mins.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm" style={{ gap: '0.4rem', fontSize: '0.82rem' }}>
              <Phone size={14} /> Call 24/7 Triage: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .matrix-row:hover {
          background-color: #f0f7ff !important;
        }
        .condition-card-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(10, 31, 68, 0.08) !important;
          border-color: rgba(2, 132, 199, 0.3) !important;
        }
        .matrix-header-grid {
          display: none !important;
        }
        .matrix-row {
          grid-template-columns: 1fr !important;
          gap: 0.75rem !important;
          padding: 1rem !important;
        }
        .matrix-row > div:last-child {
          align-items: stretch !important;
          text-align: left !important;
        }
        .matrix-row > div:last-child button {
          max-width: 100% !important;
        }
        .matrix-bottom-banner {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        @media (max-width: 767px) {
          #conditions-treated {
            padding: 2.5rem 0 2rem 0 !important;
          }
          .conditions-control-bar {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .category-pill-group {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding-bottom: 0.25rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .category-pill-group::-webkit-scrollbar {
            display: none;
          }
          .matrix-stats-bar {
            grid-template-columns: 1fr 1fr !important;
            padding: 0.75rem 1rem !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={activeCondition?.recommendedServiceId}
      />
    </section>
  );
};
